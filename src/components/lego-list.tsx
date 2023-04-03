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

const LegoList = () => {
  return <>
    {legoSetovi.map(item=> 
      <>
      <tr >
        <td className="lego__list__col">{item.title}</td>      
        <td className="lego__list__col">{item.desc}</td>
      </tr>
        </>
      )}
  </>;
};

export default LegoList;
