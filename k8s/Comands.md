
### Komentare Löschen:
kubectl exec -it deployment/mariadb -- mariadb -u admin -p$(kubectl get secret handout-db-secret -o jsonpath="{.data.db-password}" | base64 -d) -e "DELETE FROM comments_db.Comments;"

# Alles auf einmal starten (Best Practice für lokale Anwendung)
kubectl apply -f k8s/

# Oder in der logischen Reihenfolge:
kubectl apply -f k8s/secrets.yaml
kubectl apply -f k8s/mariadb.yaml
kubectl apply -f k8s/app.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/cloudflare-tunnel.yaml