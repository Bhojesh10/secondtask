function Card({ data }) {
    return (
        <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <div class="card-header">
                    <h5 class="card-title text-muted text-uppercase text-center">{data.title}</h5>
                    </div>
                    <hr />
                    <ul class="list-unstyled ">
                        <h6 class="card-price text-center"><span class="thick">${data.num}</span><span class="period">/mo</span></h6>

                        {
                            data.feature.map((list) => {
                                return (
                                    <li>  <span class="fa-li "></span>
                                        {list.name}

                                    </li>
                                )
                            })
                        }


                    </ul>
                    {
                        data.anand.map((vj)=>{
                            return(
                                <div class="d-grid">
                        <a href="#" class="btn btn-primary text-uppercase">{vj.button}</a>
                        </div>
                            )
                        })
                    }
                   
                </div>
            </div>
        </div>
    )
}
export default Card;