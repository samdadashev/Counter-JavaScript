var count = 0;

function add() {
    count += 1;
    document.getElementById('counter').innerHTML = count;
}
function lower() {
    if (count == 0) {
        window.alert('Die nummer darf nicht kleiner als Null sein '
        )
        count = 0;
    } else {
        count--;
        document.getElementById('counter').innerHTML = count;

    }
}