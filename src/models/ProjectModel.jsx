class ProjectModel {
  constructor(obj) {
    Object.assign(this, {
      img: '',
      category: ''
    }, obj);
  }
}

export default ProjectModel;
