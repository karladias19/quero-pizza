import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FaSignInAlt,
  FaUserCircle,
  FaPizzaSlice,
  FaChevronDown,
  FaChevronUp,
  FaCheck
} from 'react-icons/fa';

import { size } from '~utils';
import { useLocalStorage } from '~hooks';
import * as S from './styles';

export function Header() {
  const history = useHistory();

  const [name, setName] = useLocalStorage<string>('name', '');
  const [editingMode, setEditingMode] = useState<boolean>(false);

  const handleEditingMode = (mode?: boolean) => setEditingMode(mode ?? !editingMode);
  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setName(target.value.trimLeft());
  };
  const handleSubmitForm = (event: FormEvent<EventTarget>) => {
    event.preventDefault();
    setEditingMode(false);
  };

  return (
    <S.Header>
      <S.RowContent justifyContent="space-between" cursor="pointer">
        {size(name) > 1 ? (
          <FaUserCircle 
            onClick={() => history.push('/perfil')} 
            size={24} 
            title="Edite seu perfil"
          />
        ): (
          <FaSignInAlt 
            onClick={() => handleEditingMode(true)} 
            size={24} 
            title="Insira seu nome"
          />
        )}
        <h2>
          <span>Quero Pizza</span>
          <FaPizzaSlice size={18} />
        </h2>
      </S.RowContent>
      <S.RowContent onClick={() => handleEditingMode()}>
        <p>Olá, {size(name) > 1 ? name : 'como prefere ser chamado?'}</p>
        {editingMode ? (
          <FaChevronUp size={18} />
        ) : (
          <FaChevronDown size={18} />
        )}
      </S.RowContent>
      {editingMode && (
        <S.Form onSubmit={handleSubmitForm}>
          <S.Input onChange={handleChangeInput} value={name} autoFocus/>
          <FaCheck onClick={() => handleEditingMode(false)} size={18} />
        </S.Form>
      )}
    </S.Header>
  );
}
