import React from 'react'

export default class PictureSelect extends React.Component {
    constructor(props) {
        super(props)
    }

    getChecked = (id) => {
        const { value } = this.props
        const flag = value.some(item => item === id)
        console.log(flag,'sss')
        return flag
    }

    getAllCheckedValue = () => {
        const { value } = this.props
        if(value.length === 3) {
            return true
        }
        return false
    }

    render() {
        const { pictures } = this.props
        const allCheck = this.getAllCheckedValue()
        return <div>
            <input type="checkbox" checked={allCheck} onChange={this.props.checkAll} />
            {
                pictures.map((item) => {
                    return <div>
                                <input type="checkbox" checked={this.getChecked(item.id)} onChange={() => {this.props.onChange(item.id)}} />
                                <img src={item.url} alt='' />
                            </div>
                })
            }
        </div>
    }
}