import React, {useState} from "react";

function NewBoxForm({addBox}) {
  const initialState = {
    color: "",
    width: "", 
    height: ""
  }
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
    console.log(formData)
}

  const handleSubmit = (e) => {
    e.preventDefault();
    // const {color, width, height} = formData;
    addBox(formData);
    setFormData(initialState)

  }

    return (
      <form
       onSubmit={handleSubmit}
       >
          <label htmlFor="color">Enter a color:</label>
          <input
          type="text"
          name="color"
          value = {formData.color}
          onChange={handleChange}
          />

          <label htmlFor="width">Enter a width:</label>
          <input
          type="text"
          name="width"
          value = {formData.width}
          onChange={handleChange}
          />

          <label htmlFor="height">Enter a height:</label>
          <input
          type="text" 
          name="height" 
          value = {formData.height}
          onChange={handleChange}
          />

          <button>Add Box!</button>
      <p>{formData.color}</p>
      </form>
      
    );
  }


export default NewBoxForm;
