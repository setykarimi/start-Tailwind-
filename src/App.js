import './style.css';
import Button from './components/Button/Button';
import Avatar from './components/Avatar/Avatar';
import Form from './components/Form/Form';

function App() {
  function handleClick() {
    let htmlClasses = document.querySelector('html').classList;
    if (localStorage.theme == 'dark') {
      htmlClasses.remove('dark');
      localStorage.removeItem('theme')
    } else {
      htmlClasses.add('dark');
      localStorage.theme = 'dark';
    }
  }

  return (
    <div>
      {/* <Button onClick={handleClick} className="bg-black mx-auto w-2/12 p-2 m-2 text-white font-mono rounded dark:text-black dark:bg-white" text="Change Mode" /> */}
      <div className="m-2 p-2 flex xl:w-6/12 lg:w-10/12 md:w-10/12 sm:w-11/12 w-11/12 mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex-none w-48 relative">
          <Avatar src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F15%2F1b%2F151bee3a5d4244322835670aec6da884479b5ec1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            className="absolute md:rounded-lg sm:rounded-xl rounded-xl inset-0 w-full h-full object-cover" />
        </div>
        <Form />

      </div>
    </div>
  );
}

export default App;
