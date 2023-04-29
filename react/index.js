function MainContent() {
    return(
        <div>
            <h1>Reasons why I love react:</h1>
            <ul>
                <li>Maintained by facebook!</li>
                <li>Programming way of creating pages!</li>
                <li>Advances and efficient way of building websites</li>
                <li>Load time is tremendously fast</li>
            </ul>
        </div>
    )
}

function Page() {
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <Page />,
    document.getElementById("root")
)