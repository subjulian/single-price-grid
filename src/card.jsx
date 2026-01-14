function Card(){
    return (
        <div className="card">
            <div className="superior-card">
                <h2>Join our community</h2>
                <p className="description">30-day, hassle-free money back guarantee</p>
                <p className="text">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills</p>
            </div>
            <div className="inferior-card">
                <div className="payment-card">
                    <h3>Monthly Subscription</h3>
                    <h1>$29 <span>per month</span></h1>
                    <p>Full access for less than $1 a day</p>
                    <button>Sign Up</button>
                </div>
                <div className="information-card">
                    <h4>Why Us</h4>
                    <p>Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</p>
                </div>
            </div>
      </div>
    )
}
export default Card;