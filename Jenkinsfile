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
                    // Using double quotes (") allows Jenkins to insert the absolute path of ${WORKSPACE}
                    sh "/kaniko/executor --context=${WORKSPACE} --dockerfile=${WORKSPACE}/Dockerfile --destination=local-registry.default.svc.cluster.local:5000/k8s-handout-app:${BUILD_NUMBER} --insecure --insecure-pull"
                }
            }
        }
        stage('Deploy Rollout') {
             steps {
                 container('kubectl') {
                     // 1. Apply the manifest layout (sets up services, HPA, and deployment base)
                     sh "kubectl apply -f app.yaml"

                     // 2. Instantly inject the exact build number into the running deployment
                     sh "kubectl set image deployment/k8s-handout-app app=local-registry.default.svc.cluster.local:5000/k8s-handout-app:${BUILD_NUMBER}"

                     // 3. Monitor the rollout until it successfully completes
                     sh "kubectl rollout status deployment/k8s-handout-app"
                 }
             }
         }
    }
}