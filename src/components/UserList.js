import ListGroupWithHeaderExample from "./Card"

const UserList =({list})=> {
    return (
        <div style={{ display:"flex",alignItems:"center",flexWrap:"wrap"}}>
          {list.map((item,index)=>{
            return (
                <div style={{display:"-ms-inline-flexbox"}}> 
                  <ListGroupWithHeaderExample item={item} key={index}/>
                    </div>
            )
          })}
        </div>
    )
}

export default UserList