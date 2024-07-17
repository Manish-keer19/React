
import "./card.css"
function Card(props) {

    return (
        <>

                <div id="card">

                    <img src="https://imgs.search.brave.com/lX5XOtiO-eCPmQgTambkHjGlcnHtJ29d5y-AY5YHqCo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTUwNjY5MzEtNDM2/NWQxNGJhYjhjP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4Tm54OFkyOWth/VzVuZkdWdWZEQjhm/REI4Zkh3dw.jpeg" alt="coding" />
                    <h2> {props.title} </h2>
                    <p> {props.desc} </p>
                </div>

        </>
    )
}

export default Card;