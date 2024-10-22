    let array = ['cat', 'dog', 'cow', 'buffalo', 'donkey', 'monkey','mouse','moose',''];
    let animals = [
        'cat',
        'dog',
        'cow',
        'buffalo',
        'donkey',
        'monkey',
        'elephant',
        'giraffe',
        'tiger',
        'lion',
        'zebra',
        'kangaroo',
        'panda',
        'bear',
        'rabbit',
        'squirrel',
        'fox',
        'wolf',
        'eagle',
        'parrot'
    ];
    let search = document.getElementById("search");
    let output = document.getElementById("output");
    search.addEventListener("keyup", function() {
        let arr = [];
        let data = search.value; 
        if (data.length > 0) {
            arr = array.filter(ele => {
                return ele.toLowerCase().includes(data.toLowerCase());
            });
        }
        display(arr); 
    });
    function display(arr) {
        let content = arr.map(element => {
            return "<div onclick='select(this)'>" + element + "</div>";
        }).join(""); 
        output.innerHTML = content; 
    }
    function select(element) {
        search.value = element.innerHTML;
        output.innerHTML = "";
    }