pipeline {
    agent any
    environment {
        VERSION = '08-06-20.1.0'
    }
    stages {
        stage('checkout') {
            steps {
                echo 'Hello World'
                echo "rama de git ${env.BRANCH_NAME}"
                echo 'rama ' + env.BRANCH_NAME
            }
        }
        stage('deploy'){
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                echo 'deployando a prod'
            }
        }
        stage('version'){
            when {
                expression { ${VERSION} == '08-06-20.2.0' }
            }
            steps {
                echo 'version correcta'   
            }
        }
       
    } 
   
}
