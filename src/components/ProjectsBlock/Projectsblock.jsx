import Button2 from "../buttons/buttontogitprojects/ButtonToGit2";
import ButtonToSite from "../buttons/buttontosite/ButtonToSlte";
import "./projectsblock.css"

const ProjectsBlock = (props) => {
    return ( 
        <div className="projectsblock ">
            <div className="projects gradient">
                <div className="project">
                    <div className="row pt-3">
                        <div className="col-12 ">
                            <img src={props.img} alt="" className="img-fluid jopa" />
                        </div>
                    </div>
                    <div className="row text-start">
                        <div className="col-12 titlu_proiect">
                            <h3>{props.name}</h3>
                        </div>
                        <div className="col-12 description">
                            <p>{props.desc}</p>
                        </div>
                        <div className="col-12 text-center">
                            <div className="row no-padding">
                                <div className="col-6">
                                    <Button2 src={props.srcgit} txt="Git Hub"/>
                                </div>
                                <div className="col-6 ceva">
                                    <ButtonToSite srcsite={props.srcsite}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectsBlock;