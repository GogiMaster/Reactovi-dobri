import IconEdit from "../assets/IconEdit";
import logo from "../assets/Images/LEGO_logo.svg.webp";
const FlexExe = () => {
  return (
    <>
      <div>
        <div className="flex flex__first">
          <div className="flex__first__wrap">
            <img className="flex__first__logo" src={logo} />
            <p>TEXT</p>
          </div>
          <IconEdit />
        </div>

        <div className="flex flex__second">
          <img className="flex__first__logo" src={logo} />
          <p>TEXT</p>
        </div>

        <div className="flex flex__third">
          <img className="flex__first__logo" src={logo} />
          <p>TEXT</p>
        </div>
      </div>
      {/* novi red */}
      <h1>CARDS</h1>
      <div className="card__wrapper">
        <div className="card card__grow">
            <div className="card__header">
              <h1>Title</h1>
            </div>
            <div className="card__main">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                molestiae mollitia at dolores delectus veniam dolorem
                repudiandae quasi aliquam natus.
              </p>
            </div>
          <div className="card__fotter">
            <button className="card__fotter__btn">TEXT</button>
          </div>
        </div>
        <div className="card card__grow">
            <div className="card__header">
              <h1>Title</h1>
            </div>
            <div className="card__main">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                molestiae
              </p>
            </div>
          <div className="card__fotter">
            <button className="card__fotter__btn">TEXT</button>
          </div>
        </div>
        <div className="card card__grow">
            <div className="card__header">
              <h1>Title</h1>
            </div>
            <div className="card__main">
              <p>Lorem ipsum dolor, sit am</p>
            </div>
          <div className="card__fotter">
            <button className="card__fotter__btn">TEXT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlexExe;
