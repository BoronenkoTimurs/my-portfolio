const WorkCards = ({projects}) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {projects.map((project) => (
        <div
          key={project.id}
          style={{ backgroundImage: `url(${project.backgroundImage})` }}
          className='work-grid-item group content-div'
        >
          <div className='text-center opacity-0 group-hover:opacity-100 duration-500'>
            <span className='work-title'>{project.title}</span>
            <div className='pt-8 text-center'>
              <a target='blank' href={project.demoLink}>
                <button className='work-btn-demo'>Web Page</button>
              </a>
              <a target='blank' href={project.codeLink}>
                <button className='work-btn-code'>Code Repository</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default WorkCards;