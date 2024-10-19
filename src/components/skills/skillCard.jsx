const SkillCard = ({ img, name }) => {
  return (
    <div className="skill-card">
      <img className="w-20 mx-auto" src={img} alt="HTML icon" />
      <p className="my-4 uppercase">{name}</p>
    </div>
  )
};

export default SkillCard;