export const ItemSeenCheckout = ({datatour,process}) => {
    if(process) {
        return (
            <div>
                <div key={datatour.tour.id}  className="card mb-3 hsshadow" style={{maxWidth: '1000px'}}>
                <div className="row g-1">
                <div className="col-md-4 d-flex">
                               <img src={datatour.tour.image} className="img-fluid rounded-start" alt={datatour.tour.name} />
                           </div>
                <div className="col-md-8">
                               <div className="card-body">
                               <h5 className="card-title">Tour đã chọn: {datatour.tour.name}</h5>
                               <p className="card-text">{datatour.tour.date} | {datatour.tour.start_day}</p>
                               <p className="card-text text">Tổng số người lớn: {datatour.quantityAdult} Người</p>
                               <p className="card-text text">Tổng số trẻ em: {datatour.quantityChild} Người</p>
                               <p className="card-text text-danger">Tổng giá: {datatour.total_price} VNĐ</p>
                </div>
                </div>
                </div>
                </div>
            </div>
            )
    } else {
    return (
    <div>
        <div key={datatour.id}  className="card mb-3 hsshadow" style={{maxWidth: '1000px'}}>
        <div className="row g-1">
        <div className="col-md-4 d-flex">
                       <img src={datatour.image} className="img-fluid rounded-start" alt={datatour.name} />
                   </div>
        <div className="col-md-8">
                       <div className="card-body">
                       <h5 className="card-title">Tour đã chọn: {datatour.name}</h5>
                       <p className="card-text">{datatour.date} | {datatour.start_day}</p>
                       <p className="card-text text">Giá vé người lớn: {datatour.price_Adult} VNĐ / Người</p>
                       <p className="card-text text">Giá vé trẻ em: {datatour.price_Childern} VNĐ / Người</p>
        </div>
        </div>
        </div>
        </div>
    </div>
    )
}
}