pipeline {
    agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: kaniko
    image: gcr.io/kaniko-project/executor:debug
    command: ["sleep"]
    args: ["99d"]
  - name: kubectl
    image: bitnami/kubectl:latest
    command: ["sleep"]
    args: ["99d"]
'''
        }
    }
    stages {
        stage('Build & Push to Local Registry') {
            steps {
                container('kaniko') {
                    // Kaniko compiles your Dockerfile and pushes it directly to the in-cluster registry
                    sh '/kaniko/executor --context=dir://. --dockerfile=Dockerfile --destination=local-registry.default.svc.cluster.local:5000/k8s-handout-app:${BUILD_NUMBER} --insecure --insecure-pull'
                }
            }
        }
        stage('Deploy Rollout') {
            steps {
                container('kubectl') {
                    // Update the deployment with the exact image tag built in the previous step
                    sh 'kubectl set image deployment/k8s-handout-app app=local-registry.default.svc.cluster.local:5000/k8s-handout-app:${BUILD_NUMBER}'

                    // Force K8s to watch and verify the zero-downtime rollout succeeds
                    sh 'kubectl rollout status deployment/k8s-handout-app'
                }
            }
        }
    }
}