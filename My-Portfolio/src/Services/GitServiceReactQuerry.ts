export async function getRepos() {
    const urlBase = 'https://api.github.com/user/repos';
    const github_pat = '';
  
    
      const response = await fetch(urlBase, {
        headers: {
          Authorization: `token ${github_pat}`,
        },
      });
      const data = await response.json();
      return data;
    }
  
