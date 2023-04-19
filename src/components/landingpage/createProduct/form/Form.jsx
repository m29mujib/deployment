import './Form.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tambahData } from '../../../../store/dataSlice'

function Form() {
  // const [errorName, setErrorName] = useState("")
  // const [error, setError] = useState("")
  const dispatch = useDispatch()

  const styleButton = {
    width: '150px',
    backgroundColor: '#3A98B9',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    color: 'white',
    marginTop: '5px',
  }

  const [valueData, setValueData] = useState({
    productName: '',
    productCategory: '',
    imageFiles: '',
    productPrice: '',
    productBranches: '',
    addDescrip: '',
  })

  const regexName = /^[a-zA-Z0-9 ]{0,10}$/
  const regexCategory = /^(Alat Masak|Alat Mandi|Sport|Souvenir)$/
  const regexFreshness = /^(Jakarta|Bogor|Depok)$/
  const regexPrice = /^[0-9]*$/

  const onChange = (e) => {
    const { name, value } = e.target

    if (name === 'productName') {
      if (!regexName.test(valueData.productName) && value.length > valueData.productName.length) {
        alert(
          'Product name harus diisi berupa huruf dan angka serta maksimal 10 karakter!',
        )
        return
      }
      setValueData((val) => ({ ...val, [name]: value }))
    } else if (name === 'productCategory') {
      // if (!regexCategory.test(valueData.productCategory)) {
      //   alert('Product category harus dipilih!')
      //   return
      // }
      setValueData((val) => ({ ...val, [name]: value }))
    } else if (name === 'productBranches') {
      // if (!regexFreshness.test(valueData.productBranches)) {
      //   alert('Product frehsness harus dipilih!')
      //   return
      // }
      setValueData((val) => ({ ...val, [name]: value }))
    } else if (name === 'productPrice') {
      if (!regexPrice.test(valueData.productPrice)  && value.length > valueData.productPrice.length) {
        alert('Product price harus diisi berupa angka!')
        return
      }
      setValueData((val) => ({ ...val, [name]: value }))
    } else if (name === 'addDescrip') {
      setValueData((val) => ({ ...val, [name]: value }))
    } else {
      setValueData((val) => ({ ...val }))
    }

    // if (name === "productName" && valueData.productName.length >= 10 && valueData.productName.length < value.length) {
    // setValueData(val => ({...val}))
    // setErrorName("Nama tidak boleh melebihi 10 huruf");
    // }
    // else {
    // setValueData(val => ({...val, [name]: value}))
    // setErrorName("");
    // }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // submit({
    //    ...valueData,id: uuidv4()
    // }
    // )

    dispatch(tambahData({ data: valueData }))

    setValueData({
      productName: '',
      productCategory: '',
      imageFiles: null,
      productPrice: '',
      productBranches: '',
      addDescrip: '',
    })

    // const {productName, productCategory, productPrice, productBranches, addDescrip} = valueData

    // if ( productBranches === "" && productCategory === "" && productName === "" && productPrice === "" && addDescrip === ""){
    //   setError("tidak boleh kosong")
    // }
    // else {
    // setError("")
    // }
  }

  return (
    <div className="container mt-5">
      <h3>Detail Product</h3>
      <form id="form-data" onSubmit={onSubmit}>
        <div className="mt-1">
          <label htmlFor="product" className="d-block">
            Product Name :{' '}
          </label>
          <input
            type="text"
            value={valueData.productName}
            onChange={onChange}
            id="product"
            name="productName"
            className="w-25"
          />
        </div>

        <div className="mt-1">
          <label htmlFor="category" className="mt-2 d-block">
            Product Category :{' '}
          </label>
          <select
            type="select"
            id="category"
            name="productCategory"
            className="w-25"
            value={valueData.productCategory}
            onChange={onChange}
          >
            <option selected hidden></option>
            <option value="Alat Masak">Alat masak</option>
            <option value="Alat Mandi">Alat Mandi</option>
            <option value="Sport">Sport</option>
            <option value="Souvenir">Souvenir</option>
          </select>
        </div>

        <div className="mt-3">
          <div className="mt-3">
            <label htmlFor="images">Image of Product </label>
          </div>
          <div className="mt-3">
            <input
              type="file"
              id="images"
              name="images"
              value={valueData.imageFiles}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="productNama">
          <div className="mt-3">
            <label htmlFor="branches">Product Branches : </label>
          </div>
        </div>

        <div>
          <input
            type="radio"
            name="productBranches"
            value="Jakarta"
            onChange={onChange}
            id="branches"
            style={{ marginRight: '5px' }}
          />
          <label htmlFor="Jakarta"> Jakarta </label>
        </div>

        <div>
          <input
            type="radio"
            name="productBranches"
            value="Bogor"
            id="branches"
            onChange={onChange}
            style={{ marginRight: '5px' }}
          />
          <label htmlFor="Bogor"> bogor </label>
        </div>

        <div>
          <input
            type="radio"
            name="productBranches"
            value="Depok"
            id="branches"
            onChange={onChange}
            style={{ marginRight: '5px' }}
          />
          <label htmlFor="Depok"> depok </label>
        </div>

        <div className="mt-3">
          <label htmlFor="deskrip" className="mb-2">
            Additional Description
          </label>
          <br />
          <textarea
            name="addDescrip"
            id="deskrip"
            cols="30"
            rows="10"
            className="w-25"
            value={valueData.addDescrip}
            onChange={onChange}
          ></textarea>
        </div>

        <div className="mt-3">
          <label htmlFor="price">Product Price</label>
          <br />
          <input
            type="text"
            id="price"
            name="productPrice"
            className="w-25"
            value={valueData.productPrice}
            onChange={onChange}
          />
        </div>

        <div className="mt-3">
          <input type="submit" style={styleButton} id="submitData"></input>
        </div>
      </form>
    </div>
  )
}

export default Form
