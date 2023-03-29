const legoSetovi =[
  {
    title:'Ninjago',desc:'Nindže'
  },
  {
    title:'Chima',desc:'Životinje'
  },
  {
    title:'City',desc:'Grad'
  },
  {
    title:'Atlantis',desc:'Podvodno'
  },
  {
    title:'Harry Putter',desc:'Twajlajt'
  },
  {
    title:'Krovo-Pokrivač',desc:'Kiša'
  },
  {
    title:'Matej',desc:'Struja'
  }
];

const Navigation = () => {
  return <>
    {legoSetovi.map(item=> 
      <>
      <tr >
        <td className="lego__lista">{item.title}</td>      
        <td className="lego__lista">{item.desc}</td>
      </tr>
        </>
      )}
  </>;
};

export default Navigation;
