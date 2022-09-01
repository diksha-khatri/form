import React from 'react';



export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      phoneNumber:"",
      email:"",
      dob:"",
      gender:"",
      address:"",
      pin:"",
      bannerImg:""

    }
  }
  fields = [
    {
      id: 1,
      label: "Phone number",
      type: "number",
      val:"phoneNumber",
      name:"phoneNumber"
      
    },
    {
      id: 2,
      label: "Email Address",
      type: "email",
      val:"email",
      name:"email"
    },
    {
      id: 3,
      label: "Date of birth",
      type: "date",
      val:"dob",
      name:"dob"
    },
    {
      id: 4,
      label: "Gender",
      type: "select",
      options: [
        {
          id: 1,
          label: "--Choose--",
          value: "#",
        },
        { id: 2, label: "Male", value: "male" },
        { id: 3, label: "Female", value: "female" },
        { id: 4, label: "Other", value: "other" },
      ],
      val:"gender",
      name:"gender"
    },
    {
      id: 5,
      label: "Address ",
      type: "text",
      val:"address",
      name:"address"
    },
    {
      id: 6,
      label: "Pincode ",
      type: "number",
      val:"pin",
      name:"pin"
    },
    {
      id: 7,
      label: "Banner image",
      type: "img",
      val:"bannerImg",
      name:"bannerImg"
    },
  ];
  handleChange = (event) =>{
    console.log(this.state)
    const{name,value,type} = event.target;
    this.setState({
      [name] : value
    })
    
  }
  render() {
    return (
      <div className="Alpyus--gray--border border-radius-10px padding-2em standard font600 Alpyus--blue--color">
        <h4 className="font600 heading5 light-black margin-bottom-1em">
          Basic Details
        </h4>
        <div>
          
          <div>
                        <div>
              {this.fields.map(item => {
                const {type,val,label,name,id} = item;
                return (
                  <div>
                    {item.type === "text" ||
                    item.type === "number" ||
                    item.type === "date" ||
                    item.type === "email" ? (
                      <label
                        key={id}
                        className="width100percent margin-top-bottom-1em"
                      >
                        {label}
                        <input
                          type={type}
                          placeholder={label}
                          name={name}
                          value={this.state.name}
                          onChange={this.handleChange}
                          className="display-block width100percent padding1em Alpyus--gray--border border-radius-10px"
                        />{" "} 
                        
                      </label>
                    ) : (
                      <label
                        key={id}
                        className="width100percent margin-top-bottom-1em"
                      >
                        {item.label}
                        {item.type === "select" ? (
                          <select className="display-block width100percent padding1em Alpyus--gray--border border-radius-10px ">
                            {item.options.map((option, idx) => (
                              <option key={idx} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        ) : (
                          "t"
                        )}
                      </label>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flexCenter">
          <button className="width20percent Alpyus-green-border paddingPoint5em taxt-align-center Alpyus-green-background-color white-color font500 border-radius-10px">
            Save
          </button>
        </div>
      </div>
    );
  }
}

