// var add=document.getElementById('add');
// add.addEventListener('click',addItem);
var input=document.getElementById('input');
input.addEventListener('keypress',addKey);

var pencil=document.getElementById('pencil');
pencil.addEventListener('click',addItem);

var remove=document.getElementById('remove');
remove.addEventListener('click',removeItem);

var ul=document.getElementById('list');

function addKey(event){
    if(event.keyCode === 13)
    {
        addItem();
    }

}

function addItem(){
    var text=document.getElementById('input').value;
    var ul=document.getElementById('list');
    var textnode=document.createTextNode(text);
    if(text==='')
    {
        return false;
    }
    else{
        var li=document.createElement('li');
        var checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');


        var label=document.createElement('label');
        label.setAttribute('id','item');
        label.addEventListener('click',function(){
            label.classList.toggle('stroked');
            checkbox.classList.toggle('checked');
        })

        var btn= document.createElement('div');
        btn.setAttribute('id','cross');
        btn.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
        btn.addEventListener('click',function(){
            li.remove();
        })

        ul.appendChild(label);
        li.appendChild(checkbox);
        li.appendChild(label)
        label.appendChild(textnode);
        li.appendChild(btn);
        ul.insertBefore(li,ul.childNodes[0]);
        document.getElementById('input').value="";
    }

}

function removeItem(){
    li=ul.children;
    for (let index = 0; index < li.length; index++) {
        while(li[index] && (li[index].children[0].checked))
        {
            ul.removeChild(li[index]);
        }
        
    }

}
