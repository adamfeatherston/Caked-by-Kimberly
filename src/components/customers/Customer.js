//mdodule for creating html display of one single customer
//provide link to see orders this customer has done if footer.



export const Customer = ({ fullName, email, phone}) => {
    return <section className="customer">
   <header className="customer__header">Name: {fullName}</header>
   <div>Email: {email}</div>
   <div>Phone Number: {phone}</div>
  </section>
}