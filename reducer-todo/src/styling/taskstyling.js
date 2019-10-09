import styled from 'styled-components';

export const TaskStyle = styled.div `
width:100%;
.tasks-list {
    width:100%;
  }
  
  .container{
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    text-align: center;
    align-items: center;
   
  }
p {
    margin: 5%;
}
  .item{
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    padding: 0 0%;
    height: 100px;
    margin: 2% 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    font-size: 1rem;
  
  }
  
.invisible {
    visibility: hidden;
}
  .input{
    display: flex;
    align-items: center;
    width: 94%;
    padding: 0 3%;
    height: 100px;
    margin: 2% 0%;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    font-size: 1rem;
    border: none;
    
  
  }
  .btnitem{
    border-radius: 20px;
    margin: 10px;
    width: 150px;
    height: 50px;
  }

  .btnitem:hover {
      background: #50D3CC;
      cursor: pointer;
  }
  
  .item.completed {
    text-decoration: line-through;
    cursor: pointer;
  }
`