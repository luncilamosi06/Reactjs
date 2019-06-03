class CardApi {

    // static requestHeaders() {
    //   return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    // }
  
    static getPageCards(limit,page, search) {
      const headers = Object.assign({'Content-Type': 'application/json'});
      const request = new Request(`http://localhost:3008/people?q=`+search+`&_page=`+ page +`&_limit=`+ limit, {
        method: 'GET',
        headers: headers
      });
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }

    static getAllCards() {
      const headers = Object.assign({'Content-Type': 'application/json'});
      const request = new Request(`http://localhost:3008/people`, {
        method: 'GET',
        headers: headers
      });
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }

    static getAllPlanets() {
      const headers = Object.assign({'Content-Type': 'application/json'});
      const request = new Request(`http://localhost:3008/planets`, {
        method: 'GET',
        headers: headers
      });
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }

    static updateCard(card, id) {
      const headers = Object.assign({'Content-Type': 'application/json'});
      const request = new Request(`http://localhost:3008/people/`+ id, {
        method: 'PATCH',
        headers: headers, 
        body: JSON.stringify(card)
      });
  
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
}
  
  export default CardApi;
  