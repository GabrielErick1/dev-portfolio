import { Container, Form } from './Cadastracss.js';
import Cabecalho from '../Header/cabecalho.jsx';
import Input from '../Buttons/Input.jsx';
import TextArea from '../Buttons/TextArea.jsx';
import Buttons from '../Buttons/Buttons.jsx';
import TextareaItem from '../Buttons/TextareItem.jsx';
import { Section } from '../Section/Section.jsx';
import { Link,  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api.js';
const CadastreNotas = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState([]);
  const [newLink, setNewLink] = useState('');
  const [tag, setTag] = useState([]);
  const [newTag, setNewTag] = useState('');
  const handleAddLink = () => {
    if (newLink) {
      setLink((link) => [...link, newLink]);
      setNewLink('');
    }
    if (newTag) {
      setTag((tags) => [...tags, newTag]);
      setNewTag('');
    }
  };

  const handleDele = (usestate, deleted) => {
    usestate((prevstate) => prevstate.filter((result) => result !== deleted));
  };

  const handlePostNotes = async () => {
    if (!title) {
      return alert('Digite um título.');
    }
    if (newTag) {
      return alert('Você deixou uma tag para adicionar.');
    }
    if (newLink) {
      return alert('Você deixou um link para adicionar.');
    }
    try {
      const responseNotes = {
        title,
        description: description.toString(), // Converter para string aqui : description.toString()
        links: link,
        tags: tag,
      };
      console.log(responseNotes);
      const response = await api.post('/notes', responseNotes);
      if (response.status !== 201) {
        return;
      }
      alert(response.data.message);
      navigate(-1);
    } catch (err) {
      alert(err.message);
    } finally {
      setLink([]);
      setTag([]);
      setTitle('');
    }
  };
  
  return (
    <Container>
      <Cabecalho />
      <main>
        <Form>
          <header>
            <h1>Criar Notas</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
            value={title}
          />

            <TextArea
            onChange={(value) => setDescription(value)}
            placeholder="Descrição"
            value={description}
          />
          <Section title="Links Ulteis">
            <div className="barra">
              {link.map((link, index) => (
                <TextareaItem
                  key={index}
                  value={link}
                  onClick={() => handleDele(setLink, link)}
                />
              ))}
              <TextareaItem
                onClick={handleAddLink}
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
                placeholder="Digite um link"
                isNew
              />
            </div>
          </Section>
          <Section title="Marcadores">
            <div className="barra">
              <div className="tags">
                {tag.map((tag, index) => (
                  <TextareaItem
                    key={index}
                    value={tag}
                    onClick={() => handleDele(setTag, tag)}
                  />
                ))}
                <TextareaItem
                  onClick={handleAddLink}
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="marcador"
                  isNew
                />
              </div>
            </div>
          </Section>
          <Buttons onClick={handlePostNotes} title="Salvar" />
        </Form>
      </main>
    </Container>
  );
};

export default CadastreNotas;
