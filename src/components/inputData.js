import './inputData.css'
function Input_Data(props){
return(
    <div className="box ">
        <form>
        <div className="mb-3 align">
          <label className="form-label name"><h6>Name</h6></label>
          <input type="text" className="form-control align_name" style={{width:300}} id="name" id="name" />
          
        </div>
        <div className="mb-3 align">
          <label className="form-label"><h6>Phone Number</h6></label>
          <input type="text" className="form-control" style={{width:300}} id="phoneNumber" />
        </div>
        <div className="mb-3 align">
        <label className="form-label nameAbout"><h6>About Yourself</h6></label>

        
        </div>
        <textarea className="align_textArea align"id="about"  rows={4} cols={40} />
        <button type="button" onClick={props.submit} className="btn btn-success align submit">Submit</button>
      </form>
      </div>
);
}
export default Input_Data;