import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import "bootstrap/dist/css/bootstrap.min.css"
import Price from './price';
import Card from './card';

function App() {
  let details=[
    {
      title:"Free",
      num:0,
      feature:[
        {
          name:"10 users included"
        },
        {
          name:"2 GB of storage"
        },
        {
          name:"Email support"
        },
        {
          name:"Help center Access"
        },
      ],
        anand:[
        {
          button:"free sign up"
        }
      ]
    },
    {
      title:"pro",
      num:15,
      feature:[
        {
          name:"20 users included"
        },
        {
          name:"10 GB of storage"
        },
        {
          name:"priority Email support"
        },
        {
          name:"Help center Access"
        },
      ],
        anand:[{
          button:"get started"
        }
      ]
      
    },
    {
      title:"Enterprise",
      num:29,
      feature:[
        {
          name:"30 users included"
        },
        {
          name:"15 GB of storage"
        },
        {
          name:"phone andEmail support"
        },
        {
          name:"Help center Access"
        },
      ],
       anand:[ 
        {
          button:"contact us"
        }
       
       ]
    }



  ]
  return (
    <div>
 <Nav></Nav>
<Price></Price>
<section class="pricing py-5">
  <div class="container">
    <div class="row">
{
  details.map((card)=>{
    return <Card data={card}></Card>
  })
}
</div>
    </div>
    </section>
    </div>

  )
}

export default App;
