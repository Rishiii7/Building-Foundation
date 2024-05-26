let timeout;

function debounceSum(){
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        CalculateSum();
    }, 100);
}

async function CalculateSum(){
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;
    // let sum = parseInt(a) + parseInt(b);
    try {
        let response = await fetch(`http://localhost:3000/sum?a=${a}&b=${b}`); // Use http and correct port
        let result = await response.json();
        if(result.statusCode == 200){
            document.getElementById("result").innerHTML = 'Sum is ' + result.message;
        }
        else if(result.statusCode == 402){
            document.getElementById("result").innerHTML = 'Give input in two fields';
        }
        else{
            document.getElementById("result").innerHTML = 'Something went wrong';
        }
        
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("result").innerHTML = 'Server is Down';
    }
}

async function CalculateSumPost(){
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;

    try{
        let response = await fetch(`http://localhost:3000/sum`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                a: a,
                b: b
            })
        });

        let result = await response.json();
        // console.log("result is " + result);
        if(result.statusCode == 200){
            document.getElementById("resultPost").innerHTML = 'Sum is ' + result.message;
        }
        else{
            document.getElementById("resultPost").innerHTML = result.message;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("resultPost").innerHTML = 'Error calculating sum';
    }
}