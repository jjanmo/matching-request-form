import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '@store/root'
import { FormDataType } from '@store/slice/formSlice.type'
import { ResultDataType } from '@store/slice/resultSlice.type'
import useDownload from '@hooks/useDownload'
import HomeIcon from '@components/Icons/Home'
import DownloadIcon from '@components/Icons/Download'
import { IconButton } from '@components/Buttons'
import { colors } from '@styles/theme'
import * as CS from '../common.style'
import * as S from './Result.style'

export default function Result() {
  const navigate = useNavigate()
  const formData = useSelector<RootState, FormDataType | undefined>((state) => state.form.data)
  const resultData = useSelector<RootState, ResultDataType>((state) => state.result.data, shallowEqual)

  const { saveToData } = useDownload()

  const handleClickHome = () => {
    navigate('/')
  }
  const handleClickDownload = () => {
    saveToData()
  }

  if (!formData || !resultData) {
    return (
      <CS.Container>
        <S.EmptyWrapper>
          <S.EmptyNotice>견적 요청서를 먼저 작성해주세요!</S.EmptyNotice>
          <S.HomeLink to="/">홈으로 가기</S.HomeLink>
        </S.EmptyWrapper>
      </CS.Container>
    )
  }

  return (
    <CS.Container>
      <CS.ContentWrapper>
        <S.ButtonContainer>
          <IconButton
            icon={<DownloadIcon size={20} fillColor={colors.blue} />}
            onClick={handleClickDownload}
            color={colors.blue}
          />
          <IconButton
            icon={<HomeIcon size={20} fillColor={colors.green01} />}
            onClick={handleClickHome}
            color={colors.green01}
          />
        </S.ButtonContainer>

        <S.Title>
          <span>{formData?.title.slice(0, -2)}</span>
          <span className="form-id">(폼아이디 : {resultData?.formId})</span>
        </S.Title>

        {formData?.items.map((item, index) => (
          <S.Item key={item.itemId}>
            <S.Question $isLeft={index % 2 === 0}>{item.title}</S.Question>
            <S.SelectedOptions>
              {resultData?.items[item.itemId].map((optionId) => {
                const options = item.options
                const selectedOption = options.find((option) => option.id === optionId)
                return <S.Option key={optionId}>{selectedOption?.text} </S.Option>
              })}
            </S.SelectedOptions>
          </S.Item>
        ))}
      </CS.ContentWrapper>
    </CS.Container>
  )
}
