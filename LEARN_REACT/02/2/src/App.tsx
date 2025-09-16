import styles from './styles/App.module.css';
import classNames from 'classnames/bind';
import cg from 'classnames';
import First from './components/First';

export default function App() {
  const cx = classNames.bind(styles);

  return (
    <>
      <h1 className={cx('red_c', { 'line-through': true })}>App Component</h1>
      <h1 className={cg('primary')}>h1 Component</h1>
      <First />
    </>
  );
}
