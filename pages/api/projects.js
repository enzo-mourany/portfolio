/* eslint-disable import/no-anonymous-default-export */
import projects from "./projects.json";

export default (req, res) => {
    res.status(200).json(projects);
}