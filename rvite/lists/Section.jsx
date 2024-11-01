import List from "./List";
function Section({title,director,active}) {
    return (
        <div className="section">
          <h1>{title}</h1>
          <p>{director}
          </p>
          <List onAction={()=>{alert("PARENT")}} active={active}/>
          <br />
          <hr />
          <hr />
        </div>
    )
}

export default Section;