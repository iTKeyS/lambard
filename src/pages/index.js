import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlock
        id="about"
        title="Оставьте заявку в ОНЛАЙН"
        paragraph="Наши операторы работают круглосуточно"
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Условия получения" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="Когда нужны деньги обращайтесь к нам!"
        subtitle="Мы поможем с деньгами будь то сложной жизненая ситуация, стартап или расшерение бизнеса."
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="Быстрое оформление"
            content="Получите положительное решение в течение 30 минут"
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Доступные для всех"
            content="Приезжайте за деньгами в день обращения"
          />
          <Perk
            img={perk3Img}
            alt="Super fast speed increases"
            title="Всегда на связи"
            content="Звоните / пишите / мы всегда на связи 24/7"
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Наши предложения"
        para="Всегда можно создать условия удобные для всех, поддержим вас в любой ситуации и составим лояльные договор"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Стандарт">
            <ul>
              <li>
                <MdDone />1 месяц
              </li>
              <li>
                <MdDone />
                До 50 тыс.руб.
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Без залога
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                и еще какой-нибудь херни
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="Оставить заявку!" />
            </Link>
          </Package>
          <Package title="Бизнес" active={true}>
            <ul>
              <li>
                <MdDone />
                24/7 Поддержка
              </li>
              <li>
                <MdDone />
                До 1 арбуза
              </li>
              <li>
                <MdDone />
                Индивидуальный договор
              </li>
              <li>
                <MdDone />
                Конфетка в подарок
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="Оставить заявку!" />
            </Link>
          </Package>
          <Package title="ЧеПе">
            <ul>
              <li>
                <MdDone />
                24/7 Поддержка
              </li>
              <li>
                <MdDone />
                До половины арбуза
              </li>
              <li>
                <MdDone />
                Под ПТС или залог недвижимости
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                и еще какой-нибудь херни
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="Оставить заявку!" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="contact"
        title="Оставьте свои контактные данные для проверки"
        subtitle="Оформлая заявку онлайн вы ускоряете процесс принятия решения о вызаче займа"
      />
    </>
  )
}

export default HomePage
