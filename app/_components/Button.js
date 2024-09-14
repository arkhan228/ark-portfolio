function Button({ onClick = null, type = 'button', children }) {
  return (
    <button
      type={type}
      className='self-center px-4 py-2 mt-4 rounded-full bg-accent-600 text-primary-50'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
