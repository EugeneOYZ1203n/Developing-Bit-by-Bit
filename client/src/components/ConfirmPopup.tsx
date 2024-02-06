import './ConfirmPopup.css'

export default ({data}:{data:{confirmText:string, confirmButtonText:string, cancelButtonText:string, confirmFunction:Function, cancelFunction:Function}}) => {
    return (
        <div className='BlackBackground'>
            <div className="ConfirmPopup">
                <div className="ConfirmText">{data.confirmText}</div>
                <div className='buttonsList'>
                    <button className='PopupConfirmButton' onClick={()=>data.confirmFunction()}>{data.confirmButtonText}</button>
                    <button className='PopupCancelButton' onClick={()=>data.cancelFunction()}>{data.cancelButtonText}</button>
                </div>
            </div>
        </div>
    )
}