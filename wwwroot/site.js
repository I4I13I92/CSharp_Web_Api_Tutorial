const uir = "todo/api";
let todos = null;
function getCount(data)
{
    const el = $("#counter");
    let name = "to-do";
    if (data)
    {
        if (data > 1) {
            name = "to-dos";
        }
        el.text(data + " " + name)
    }
    else
    {
        el.text("No" + name);
    }
}

$(document).ready(function () {
    getData();
})

function getData() {
    $.ajax({
        type: "Get",
        url: uri,
        cache: false,
        success: function (data) {
            const tBody = $("#todos");

            $(tBody).empty();
            getCount(data.length);

        }
    })
}
