var add=document.getElementById('add');
add.addEventListener('click',addItem);

var remove=document.getElementById('remove');
remove.addEventListener('click',removeItem);

var ul=document.getElementById('list');



function addItem(){
    var input=document.getElementById('input').value;
    var ul=document.getElementById('list');
    var textnode=document.createTextNode(input);
    if(input==='')
    {
        // var para=document.createElement('p')
        // para.textContent="Enter your TODO!!";
        // document.querySelector('input').after(para);
        return false;
    }
    else{
        var li=document.createElement('li');
        var checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');
        var label=document.createElement('label');
        label.setAttribute('for','item');

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0]);
        document.getElementById('input').value="";
    }

}


function removeItem(){
    li=ul.children;
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked)
        {
            ul.removeChild(li[index]);
        }
        
    }

}