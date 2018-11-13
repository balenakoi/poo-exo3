
function Product(title, phrase, description){
    this.title = title;
    this.phrase = phrase;
    this.description = description;
  }
  
  let sumbit = {
    getInput: function(){
      let title = document.getElementById("title").value;
      let phrase = document.getElementById("phrase").value;
      let description = document.getElementById("description").value;
      sumbit.newObjet(title, phrase, description);
    },
    newObjet: function(title, phrase, description){
      let element = new Product(title, phrase, description);
      sumbit.htmlManager(element);
    },
    htmlManager: function(element){
      let newDiv = document.createElement("p");
      cards.append(newDiv);
      let title = document.createElement("p");
      title.innerHTML = element.title;
      newDiv.append(title);
      let phrase = document.createElement("p");
      phrase.innerHTML = element.phrase;
      newDiv.append(phrase);
      let description = document.createElement("p");
      description.innerHTML = element.description;
      newDiv.append(description);
      cards = document.getElementById("cards");
  
      sumbit.clearAll();
    },
    clearAll: function(){
      document.getElementById("title").value = "";
      document.getElementById("phrase").value = "";
      document.getElementById("description").value = "";
    }
  };

