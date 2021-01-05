import React from 'react'
import $ from 'jquery'
import './App.css'
import styled from 'styled-components'
import { ReactComponent as Env } from './static/envelope.svg'
import { ReactComponent as Lock } from './static/padlock.svg'
import { ReactComponent as Checkmark } from './static/Check_mark_9x9.svg'
import { forwardRef, useRef, useState } from 'react'
import doctor from './static/img_doctor_90@3x.svg'
import patient from './static/img_patient_90@3x.svg'
import { comparePwd } from './static/comparePwd'

const MApp = styled.div`
  width: 618px;
  height: 900px;
  padding: 30px 0;
  box-shadow: 0 0 40px 2px #00000047;
  @media (max-width: 630px) {
    width: 370px;
    height: 540px;
  }
`

const Title = styled.div`
  font-size: 27px;
  color: #3eb7ed;
  @media (max-width: 630px) {
    font-size: 15px;
  }
`

const Role = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 242px;
  height: 244px;
  border-radius: 5px;
  border: ${({ isFocus }) =>
    isFocus ? '2px solid #3eb7ed' : '2px solid #eaedf1'};
  @media (max-width: 630px) {
    width: 132px;
    height: 132px;
  }
`

const Roles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 45px 50px 40px 53px;
  @media (max-width: 630px) {
    padding: 26px 26px 24px 32px;
  }
`

const Hello = styled.div`
  padding-top: 3px;
  font-size: 20px;
  line-height: 12px;
  text-align: center;
  color: #b4b4b4;
  @media (max-width: 630px) {
    padding-top: 2px;
    line-height: 3px;
    font-size: 12px;
  }
`

const InputsRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 177px;
  padding-top: 53px;
  @media (max-width: 630px) {
    height: 105px;
    padding-top: 30px;
  }
`

const Form = styled.form``

const InputA = styled.input`
  flex-grow: 1;
  font-size: 20px;
  outline: none;
  border: none;
  &::placeholder {
    color: #b9b9b9;
  }
  @media (max-width: 630px) {
    font-size: 12px;
  }
`

const AccInput = styled.div`
  position: relative;
  display: flex;
  width: 83%;
  height: 70px;
  box-sizing: border-box;
  border: 2px solid #e6e9ec;
  border-radius: 5px;
  @media (max-width: 630px) {
    height: 42px;
    border-radius: 3px;
  }
`

const SingupRow = styled.div`
  padding-top: 13px;
  padding-left: 4px;
  font-size: 20px;
  color: #b9b9b9;
  @media (max-width: 630px) {
    font-size: 12px;
    padding-top: 6px;
  }
`

const Signup = styled.button`
  background-color: inherit;
  cursor: pointer;
  color: #3eb7ed;
  border: none;
  font-size: 21px;
  @media (max-width: 630px) {
    font-size: 12px;
  }
`

const Login = styled.button`
  width: 167px;
  height: 60px;
  color: white;
  background-color: #3eb7ed;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  cursor: pointer;
  @media (max-width: 630px) {
    width: 100px;
    height: 36px;
    font-size: 14px;
    border-radius: 3px;
  }
`

const LogRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding: 0 49px;
  @media (max-width: 630px) {
    margin-top: 27px;
    padding: 0 30px 0 27px;
  }
`

const Forgot = styled.div`
  margin: 3% 0;
  padding-top: 4px;
  flex-basis: 115px;
  border-left: 2px solid #e6e9ec;
  font-size: 21px;
  color: #3eb7ed;
  cursor: pointer;
  @media (max-width: 630px) {
    font-size: 12px;
    flex-basis: 61px;
    padding-top: 1px;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 65px;
  @media (max-width: 630px) {
    flex-basis: 39px;
  }
`

const Label = styled.div`
  position: absolute;
  left: 21px;
  top: -19px;
  width: 61px;
  height: 28px;
  border-radius: 3px;
  line-height: 28px;
  border-radius: 3px;
  font-size: 16px;
  background-color: #3eb7ed;
  color: white;
  @media (max-width: 630px) {
    top: -12px;
    left: 13px;
    width: 36px;
    height: 17px;
    font-size: 9px;
    line-height: 17px;
    border-radius: 2px;
  }
`

const Acc = forwardRef(
  (
    {
      type,
      label,
      placeholder,
      hasForgot = false,
      onClickForgot,
      onChange,
      className
    },
    ref
  ) => {
    const [isFocus, setIsFocus] = useState(false)
    const IconCom =
      type === 'email' ? (
        <Env width='28px' fill='#eaedf1' />
      ) : (
        <Lock width='28px' fill='#eaedf1' />
      )
    return (
      <AccInput className={className}>
        <Icon>{IconCom}</Icon>
        <InputA
          ref={ref}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => {
            const node = $(`.${className}`)
            node.css('border', '2px solid #38b5ed')
            setIsFocus(true)
          }}
          onBlur={() => {
            const node = $(`.${className}`)
            node.css('border', '2px solid #e6e9ec')
            setIsFocus(false)
          }}
        ></InputA>
        {hasForgot && <Forgot onClick={onClickForgot}>Forgot?</Forgot>}
        {label && isFocus && <Label>{label}</Label>}
      </AccInput>
    )
  }
)

const checkWidth = 45

const Check = styled.div`
  position: absolute;
  bottom: -${checkWidth / 2 - 5}px;
  right: -${checkWidth / 2 - 8}px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${checkWidth}px;
  height: ${checkWidth}px;
  border-radius: 50%;
  background-color: #38b5ed;
  box-shadow: 0 3px 3px 3px #38b5ed52;
  @media (max-width: 630px) {
    bottom: -${(checkWidth / 2 - 5) * 0.6}px;
    right: -${(checkWidth / 2 - 8) * 0.6}px;
    width: ${checkWidth * 0.6}px;
    height: ${checkWidth * 0.6}px;
  }
`

const WrappedCheckmark = styled(Checkmark)`
  width: 30px;
  height: 30px;
  @media (max-width: 630px) {
    width: 18px;
    height: 18px;
  }
`

const RoleArea = ({ img, isFocus, onClick }) => {
  return (
    <Role isFocus={isFocus} onClick={onClick}>
      <img src={img} alt='' width='75%' />
      {isFocus && (
        <Check>
          <WrappedCheckmark
            x='0px'
            y='0px'
            viewBox='0 0 280 280'
            fill='#FFF'
          ></WrappedCheckmark>
        </Check>
      )}
    </Role>
  )
}

const RolesArea = ({ imgs }) => {
  const [focusI, setFocusI] = useState(-1)
  return (
    <Roles>
      {imgs.map((v, i) => (
        <RoleArea
          key={v.toString()}
          isFocus={i === focusI}
          img={v}
          onClick={() => {
            setFocusI(i)
            console.log(i)
          }}
        ></RoleArea>
      ))}
    </Roles>
  )
}

const Error = styled.p`
  position: absolute;
  bottom: -50px;
  left: 58px;
  font-size: 20px;
  color: red;
  @media (max-width: 630px) {
    bottom: -30px;
    left: 35px;
    font-size: 12px;
  }
`

function App() {
  const emailRef = useRef(null)
  const pwdRef = useRef(null)
  const [error, setError] = useState(false)
  return (
    <div className='App'>
      <MApp>
        <Title>Choose Account Type</Title>
        <RolesArea imgs={[doctor, patient]}></RolesArea>
        <Hello>
          <p>Hello doctor!</p>
          <p>Please fill out the form below to get started</p>
        </Hello>
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            const hasError = comparePwd(
              emailRef.current.value,
              pwdRef.current.value,
              6
            )
            setError(hasError)
          }}
        >
          <InputsRow>
            <Acc
              label='Email'
              type='email'
              placeholder='Email'
              className='email'
              ref={emailRef}
              onChange={() => {
                const hasError = comparePwd(
                  emailRef.current.value,
                  pwdRef.current.value,
                  6
                )
                setError(hasError)
              }}
            ></Acc>
            <Acc
              type='pwd'
              placeholder='Password'
              hasForgot={true}
              className='pwd'
              ref={pwdRef}
              onChange={() => {
                const hasError = comparePwd(
                  emailRef.current.value,
                  pwdRef.current.value,
                  6
                )
                setError(hasError)
              }}
            ></Acc>
            {error && <Error>Password is not valid</Error>}
          </InputsRow>
          <LogRow>
            <SingupRow>
              No account?
              <Signup>Signup</Signup>
            </SingupRow>
            <Login>Login</Login>
          </LogRow>
        </Form>
      </MApp>
    </div>
  )
}

export default App
