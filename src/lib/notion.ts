import Project from '../types/project';

async function getProject(): Promise<Project[]> {
  const response: Project[] = await fetch(
    'https://notion-api.splitbee.io/v1/table/' +
      import.meta.env.VITE_NOTION_PROJECTS_DB
  ).then((res) => res.json());

  return response;
}

export default getProject;
