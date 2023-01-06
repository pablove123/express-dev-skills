import { skills } from '../bin/data.js/skills-data.js'


function index(req, res) {
  res.render("skills/index", {
    skills:skills
  })
}

export{
  index, 
}