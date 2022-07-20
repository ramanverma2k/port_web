interface Project {
  id: String,
  Name: String,
  Description: String | undefined,
  Category: String[],
  Tags: String[],
  Publish: boolean,
}

export default Project;
