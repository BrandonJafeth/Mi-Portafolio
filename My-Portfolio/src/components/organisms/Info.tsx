import { useQuery } from '@tanstack/react-query';
import { RepoType } from '../../types/RepoType';
import { getRepos } from '../../Services/GitServiceReactQuerry';

function Info() {
  const { data, isLoading } = useQuery({
    queryKey: ['repos'],
    queryFn: getRepos
  });
console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Repositories</h1>
      {data.map((repo: RepoType) => (
        <div className='text-blue' key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            {repo.name}
          </a>
          <h1 className="text-red-200">Siuu</h1>
        </div>
      ))}
    </div>
  );
}

export default Info;