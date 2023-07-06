exports.defaultRoute = async (req, res) => {
  try {
    res.status(200).json({ message: 'Connected with API' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to connect with API', error: error.message });
  }
};
