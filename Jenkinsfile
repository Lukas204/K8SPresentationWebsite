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
    command:
    - sleep
    args:
    - 99d
  - name: kubectl
    image: alpine/k8s:1.29.2  # <-- Swapped from bitnami to alpine/k8s
    command:
    - sleep
    args:
    - 99d
'''
        }
    }
    stages {
        stage('Build & Push to Local Registry') {
            steps {
                container('kaniko') {
                    sh "/kaniko/executor --context=${WORKSPACE} --dockerfile=${WORKSPACE}/Dockerfile --destination=local-registry.default.svc.cluster.local:5000/k8s-handout-app:${BUILD_NUMBER} --insecure --insecure-pull"
                }
            }
        }
        stage('Deploy Rollout') {
            steps {
                container('kubectl') {
                    // Running under root, this will now execute flawlessly
                    sh "kubectl apply -f k8s/app.yaml"
                    sh "kubectl set image deployment/k8s-handout-app app=local-registry.default.svc.cluster.local:5000/k8s-handout-app:${BUILD_NUMBER}"
                    sh "kubectl rollout status deployment/k8s-handout-app"
                }
            }
        }
    }
}