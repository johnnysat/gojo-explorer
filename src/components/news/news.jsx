import './news.css'


export default function News({ titleCard, subCard }) {

    return (
        <>
            <div class="card">
                <div class="card-title">{titleCard}</div>
                <div class="card-subtitle">{subCard}</div>
                <hr class="card-divider" />
                <div class="card-footer">
                    <button class="card-btn">
                        Leia mais
                    </button>
                </div>
            </div>
        </>
    )
}