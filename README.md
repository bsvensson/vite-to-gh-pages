# Vite to GitHub

Following along from https://chihiro-and-justin.medium.com/deploy-a-react-vite-app-using-github-actions-and-github-pages-a370df30da97

GitHub Actions, after each push to `main` branch, will run "npm install" and "npm run build". 
The later which does "tsc && vite build".
And after a minute or two, https://bsvensson.github.io/vite-to-gh-pages/ will be updated.
