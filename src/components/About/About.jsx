import styles from './About.module.css'
{
  /*import ava from '../../assets/ava.png'*/
}
import alfaava from '../../assets/AlfaAva.png'
import { IoTriangleOutline } from 'react-icons/io5'
import { useState } from 'react'
import { clsx } from 'clsx'

function About() {
  return (
    <main className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.imageWrapper}>
          {/*<img className={styles.aboutAva} src={ava} alt="А где картинка?" />*/}
          <div className={styles.objFBackground}>
            <img className={styles.objFBackgroundAva} src={alfaava} alt="А где картинка?" />
            <div className={styles.objFFrameTop} aria-hidden="true" />
            <div className={styles.objFFrameBottom} aria-hidden="true" />
            <img className={styles.objFBackgroundAvaHead} src={alfaava} alt="" aria-hidden="true" />
          </div>

          <div className={styles.aboutMinContent}>
            <p className={styles.aboutContentMinInfo}>Был в сети: 01.04.2001, 10:23 </p>
            <a href="#" className={styles.aboutContentLinkSupport}>
              Поддержать❤️
            </a>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <TextBlock title={'О себе'} isOpen={true}>
            <div className={styles.contentWrapperBox}>
              <p className={styles.contentWrapperBoxText}>
                Всем привет! Меня зовут Ярослав Бесфалин, в интернете я известен под псевдонимом
                Dante Besfalinn. Мне 23 года (на 2024 год). Родился в городе Выборг. При рождении я
                задушился пуповиной и мне поставили диагноз ДЦП (детский церебральный паралич). Этот
                диагноз принес множество проблем: я не умею ходить, не умею управлять руками, имею
                дефекты речи, а если точнее то, это затрудняет общение с незнакомыми людьми. Родные
                понимают меня без труда, но с чужими приходится просить помощи в переводе. До
                шести-семи лет я жил в Выборге, а затем родители перевезли меня в Санкт-Петербург.
                Когда пришло время идти в школу, стало ясно, что из-за моего состояния я не смогу
                посещать обычную школу и было решено обучаться на дому. Однако учителя не смогли
                адаптироваться к моим нуждам и предложили специализированную школу для детей с
                особенностями развития.
              </p>
              <p className={styles.contentWrapperBoxText}>
                До шести-семи лет я жил в Выборге, а затем родители перевезли меня в
                Санкт-Петербург. Когда пришло время идти в школу, стало ясно, что из-за моего
                состояния я не смогу посещать обычную школу, и было решено обучаться на дому. Однако
                учителя не смогли адаптироваться к моим нуждам и предложили специализированную школу
                для детей с особенностями развития. Так я начал учиться в первом классе: ко мне
                приходила учительница, похожая на воспитательницу детского сада, хотя в садик я не
                ходил. Она была очень добрая и учила меня читать, считать, писать, рисовать и лепить
                из пластилина. После первого класса она ушла по семейным обстоятельствам, и её
                заменила очень строгая учительница. Были и хорошие моменты: однажды она подарила мне
                школьный компьютер. Учительница приходила ко мне три раза в неделю, и у нас были
                уроки русского языка, математики и чтения. Она очень строго меня учила, порой до
                слез, и давала много домашних заданий. Такой режим обучения продолжался два года.
                После третьего класса, как мне рассказала мама, учительница уволилась, чему я был
                очень рад.
              </p>
              <p className={styles.contentWrapperBoxText}>
                Когда мне было 13 или 14 лет, бабушка увидела в новостях информацию о медицинском
                институте имени Турнера. Мама подала заявление на лечение и меня приняли. Мне
                сделали операцию под коленками: подрезали связки, чтобы ноги могли полностью
                разгибаться. После операции я проснулся и увидел, что мои ноги от бедер до пяток в
                гипсе. Это было очень неудобно. На третьи сутки после операции пришел хирург и меня
                отвезли в процедурную. Там мне сделали маленький надрез под коленками и хирург начал
                с силой разгибать ноги, так как я напрягся от страха и боли. Такие процедуры
                повторялись несколько раз. После этого меня отправили домой и я лежал в гипсе три
                месяца. Потом пришло время знакомиться с новой учительницей. Она посмотрела на нашу
                семью и отменила домашние задания, так как у нас в семье много дел. Она также
                спросила, будем ли мы изучать английский, но мама отказалась из-за моего дефекта
                речи и сложности в понимании. Прошло полтора года после операции и мы поехали
                снимать гипс. Его сняли, но ноги не сгибались из-за боли и в течение нескольких
                недель мы разрабатывали их, чтобы я мог просто сесть. Это было очень больно. Мы
                занимались дома без специалиста по ЛФК, поэтому не до конца разработали связки, а
                потом вообще бросили из-за сильной боли . Учебный год закончился и мы снова поехали
                в институт имени Турнера. Теперь нужно было буквально пересобрать стопу, так как она
                была в очень плохом состоянии. Мне сделали операцию: полностью пересобрали стопу и
                вставили пять спиц. Через три месяца их извлекли и ногу замотали в гипс. После этого
                я продолжил учиться. С момента первой операции под коленками я больше не мог
                полноценно сгибать ноги и сидеть как все дети.
              </p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
            </div>
          </TextBlock>
          <TextBlock title={'Новая карточка'} isOpen={false}>
            test
          </TextBlock>
        </div>
      </div>
    </main>
  )
}

function TextBlock({ title, isOpen, children }) {
  const [isActive, setIsActive] = useState(isOpen)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={clsx(styles.textBlock, { [styles.textBlockLow]: !isActive })}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <IoTriangleOutline
          size="2em"
          className={clsx(styles.textBlockBtn, { [styles.textBlockBtnOpen]: isActive })}
          onClick={handleToggle}
        />
      </div>
      <p className={styles.paragraph}>{children}</p>
    </div>
  )
}

export default About
